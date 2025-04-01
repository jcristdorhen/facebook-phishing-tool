-- Create users table for storing login credentials
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    ip_address VARCHAR(45),
    user_agent TEXT
);

-- Create index on email for faster lookups
CREATE INDEX idx_users_email ON users(email);

-- Add RLS (Row Level Security) policy to allow inserts from anyone
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow inserts to users table" ON users
    FOR INSERT
    WITH CHECK (true);

-- Optionally, prevent selecting data for security
CREATE POLICY "Prevent selecting from users table" ON users
    FOR SELECT
    USING (false);
