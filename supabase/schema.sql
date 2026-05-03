-- ============================================================
-- Hacker's Unity — Contact / Join Us System
-- Supabase (PostgreSQL) Schema
-- ============================================================

-- 1. Contact Form Submissions
-- Stores every message submitted through the /contact form.
-- ============================================================

CREATE TABLE IF NOT EXISTS contact_submissions (
  id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name         TEXT        NOT NULL,
  email        TEXT        NOT NULL,
  subject      TEXT        NOT NULL,
  message      TEXT        NOT NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index on created_at for quick chronological queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created
  ON contact_submissions (created_at DESC);

-- ============================================================
-- 2. Community Links ("Other Ways to Reach Us")
-- Stores the various contact channels shown on the sidebar.
-- ============================================================

CREATE TABLE IF NOT EXISTS community_links (
  id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  type         TEXT        NOT NULL
                 CHECK (type IN ('email', 'phone', 'discord', 'whatsapp')),
  label        TEXT        NOT NULL,
  value        TEXT        NOT NULL,
  icon         TEXT,                       -- optional icon identifier
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- 3. Row-Level Security (RLS)
-- ============================================================

-- Enable RLS on both tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_links     ENABLE ROW LEVEL SECURITY;

-- contact_submissions: anyone can INSERT (public form), only authenticated users can SELECT
CREATE POLICY "Allow public inserts on contact_submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated reads on contact_submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- community_links: anyone can read (public sidebar), only authenticated users can modify
CREATE POLICY "Allow public reads on community_links"
  ON community_links
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow authenticated modifications on community_links"
  ON community_links
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ============================================================
-- 4. Sample Data — Community Links
-- Populated from the existing contact page details.
-- ============================================================

INSERT INTO community_links (type, label, value, icon) VALUES
  ('email',    'Email',           'hackerunity.community@gmail.com',                          'Mail'),
  ('phone',    'Phone',           '+91 8852924002',                                           'Phone'),
  ('phone',    'Phone',           '+91 9324264950',                                           'Phone'),
  ('discord',  'Discord',         'https://discord.com/invite/xcNNqdDhce',                    'MessageCircle'),
  ('whatsapp', 'WhatsApp',        'https://chat.whatsapp.com/JqVKrBiZIdND1n40ffErw3?mode=gi_t', 'MessageSquare');

-- ============================================================
-- 5. Sample Data — Contact Submissions (demo rows)
-- ============================================================

INSERT INTO contact_submissions (name, email, subject, message) VALUES
  ('Aarav Mehta',   'aarav@example.com',   'Partnership Inquiry',      'Hi team! I run a tech community in Pune and would love to explore a collaboration for an upcoming hackathon.'),
  ('Priya Sharma',  'priya@example.com',   'Mentorship Opportunity',   'I'm a senior developer at a startup and I'd like to volunteer as a mentor for your next event.'),
  ('Rohan Desai',   'rohan@example.com',   'Event Sponsorship',        'Our company is interested in sponsoring HACKSTORM 2025. Could you share the sponsorship deck?');
