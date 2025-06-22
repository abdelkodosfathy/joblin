import { FC } from "react";

import { Button } from "@/components/ui/button";
import {
  ActiveCampaign,
  Afterpay,
  Airbnb,
  Airtable,
  Airtasker,
  Evernote,
  Figma,
  Fivetran,
  Framer,
  Freshworks,
  Outreach,
  PayPal,
  Pendo,
  Pipedrive
} from '@/public/companies';
import CompanyLogo from "./company-logo";
import Section from "./Section";

const CompaniesSection: FC = () => {
  return (
    <Section
      title="Built for companies of all sizes"
      description="We’re the best one platform that connects you straight to the person who knows your job inside out."
    >
      <div className="w-full flex justify-center">
        <div className="flex gap-6">
          <Button className="px-18 py-6">Join for free</Button>
          <Button className="px-18 py-6" variant="outline">
            See our plans
          </Button>
        </div>
      </div>

      <div className="max-w-7xl m-auto py-4">
        <div className="flex justify-center">
          <CompanyLogo alt="ActiveCampaign logo" src={ActiveCampaign} />
          <CompanyLogo alt="Evernote logo" src={Evernote} />
          <CompanyLogo alt="Outreach logo" src={Outreach} />
          <CompanyLogo alt="Afterpay logo" src={Afterpay} />
          <CompanyLogo alt="Figma logo" src={Figma} />
        </div>
        <div className="flex justify-center">
          <CompanyLogo alt="PayPal logo" src={PayPal} />
          <CompanyLogo alt="Airbnb logo" src={Airbnb} />
          <CompanyLogo alt="Fivetran logo" src={Fivetran} />
          <CompanyLogo alt="Pendo logo" src={Pendo} />
          <CompanyLogo alt="Airtable logo" src={Airtable} />
          <CompanyLogo alt="Framer logo" src={Framer} />
        </div>
        <div className="flex justify-center">
          <CompanyLogo alt="Pipedrive logo" src={Pipedrive} />
          <CompanyLogo alt="Airtasker logo" src={Airtasker} />
          <CompanyLogo alt="Freshworks logo" src={Freshworks} />
        </div>
      </div>
    </Section>
  );
};

export default CompaniesSection;
