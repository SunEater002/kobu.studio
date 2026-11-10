-- ============================================================
-- Opiniones de Kobu Studio
-- Pégalo completo en Supabase > SQL Editor y presiona "Run".
-- ANTES de correrlo: cambia TU_CORREO_ADMIN@ejemplo.com por el correo
-- con el que inicias sesión en admin.html (aparece en 4 lugares: usa Buscar y reemplazar).
-- Usa una tabla propia (kobu_opiniones) para no mezclarse con los
-- comentarios de La Mordida de Bebe.
-- ============================================================

create table if not exists public.kobu_opiniones (
  id           uuid primary key default gen_random_uuid(),
  nombre       text        not null check (char_length(nombre) between 2 and 60),
  pedido       text                 check (pedido is null or char_length(pedido) <= 80),
  calificacion int         not null check (calificacion between 1 and 5),
  comentario   text        not null check (char_length(comentario) between 5 and 600),
  respuesta    text                 check (respuesta is null or char_length(respuesta) <= 500),
  estado       text        not null default 'pendiente' check (estado in ('pendiente', 'aprobado')),
  creado       timestamptz not null default now()
);

alter table public.kobu_opiniones enable row level security;

-- Permisos base (las políticas de abajo son las que realmente deciden)
grant insert, select on public.kobu_opiniones to anon;
grant select, insert, update, delete on public.kobu_opiniones to authenticated;

-- 1) Cualquier visitante puede ENVIAR una opinión, siempre como pendiente y sin respuesta
create policy "enviar opinion"
  on public.kobu_opiniones for insert
  to anon, authenticated
  with check (estado = 'pendiente' and respuesta is null);

-- 2) El público solo VE las opiniones aprobadas
create policy "ver aprobadas"
  on public.kobu_opiniones for select
  to anon, authenticated
  using (estado = 'aprobado');

-- 3) Solo el administrador ve todo, aprueba, responde y elimina
create policy "admin ve todo"
  on public.kobu_opiniones for select
  to authenticated
  using ((auth.jwt() ->> 'email') = 'TU_CORREO_ADMIN@ejemplo.com');

create policy "admin actualiza"
  on public.kobu_opiniones for update
  to authenticated
  using      ((auth.jwt() ->> 'email') = 'TU_CORREO_ADMIN@ejemplo.com')
  with check ((auth.jwt() ->> 'email') = 'TU_CORREO_ADMIN@ejemplo.com');

create policy "admin elimina"
  on public.kobu_opiniones for delete
  to authenticated
  using ((auth.jwt() ->> 'email') = 'TU_CORREO_ADMIN@ejemplo.com');
