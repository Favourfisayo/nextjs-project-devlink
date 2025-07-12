// src/app/api/seed/route.ts
import { NextResponse } from 'next/server';
import sql from '@/app/lib/db';
import { placeholderdata } from '@/app/data/placeholder-data';

export async function GET() {
  try {
    const values = placeholderdata.map(dev => [
      dev.name,
      dev.email,
      dev.project_title,
      dev.github_link,
      dev.site_link,
      dev.description,
      sql.array(dev.tags),
    ] as const);

    await sql`
      INSERT INTO developers (
        name, email, project_title, github_link, site_link, description, tags
      )
      VALUES ${sql(values)}
    `;

    return NextResponse.json({ message: '✅ Seeded successfully' });
  } catch (err) {
    console.error('❌ Seeding error:', err);
    return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 });
  }
}
