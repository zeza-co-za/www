import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Zeza.co.za Docs" description="Docusaurus documentation hub for Zeza.co.za.">
      <main className="hero hero--primary">
        <div className="container text--center">
          <h1 className="hero__title">Zeza.co.za Docs</h1>
          <p className="hero__subtitle">
            Navigate the resource assets, lead magnets, community setup, launch systems and implementation notes behind Zeza.co.za.
          </p>
          <p style={{marginTop: '2rem'}}>
            <Link className="button button--primary button--lg" to="/docs/">
              Open Documentation
            </Link>{' '}
            <Link className="button button--secondary button--lg" to="/assets/pages/resource-library.html">
              Resource Library
            </Link>
          </p>
        </div>
      </main>
    </Layout>
  );
}
