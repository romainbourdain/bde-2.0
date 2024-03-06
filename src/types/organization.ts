export type Organization = {
  id: number;
  short_name: string;
  name: string;
  logo_url: string;
};

export type DetailedOrganization = Organization & {
  description: string;
  website_link?: string;
  facebook_link?: string;
  twitter_link?: string;
  instagram_link?: string;
  discord_link?: string;
  email?: string;
};
