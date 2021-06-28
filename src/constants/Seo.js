import React from "react";
import { Helmet } from "react-helmet";

export default function Seo(props) {
  const { title, description } = props;
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="admin,super,super admin,super_admin,tyto,tyto_superadmin,tyto_super_admin"
      />
      <meta name="robots" content="index,follow" />
      <meta name="og:type" content="admin" />
      <meta name="og:url" content="https://tytosuperadmin.gatsbyjs.io/" />
      <meta name="og:title" content="Tyto Super Admin" />
      <meta name="og:image" content />
      <meta name="og:image" content />
      <meta name="og:description" content="Tyto Super Admin" />
      <meta name="og:site_name" content="Tyto Super Admin" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TytoSuperAdmin" />
      <meta name="twitter:url" content="https://tytosuperadmin.gatsbyjs.io/" />
      <meta name="twitter:title" content="Tyto Super Admin" />
      <meta name="twitter:description" content="Tyto Super Admin" />
      <meta name="twitter:image" content />
      <meta name="twitter:image:alt" content />
    </Helmet>
  );
}
