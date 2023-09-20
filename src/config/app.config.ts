interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Patient', 'Medical Staff', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor appointment system ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read clinic information',
    'Read appointment details',
    'Read insurance provider information',
    'Read healthcare provider information',
  ],
  ownerAbilities: ['Manage users', 'Manage clinics', 'Manage appointments', 'Manage insurance providers'],
  getQuoteUrl: 'https://app.roq.ai/proposal/d3b50619-7f06-4321-979a-17c34daf2c79',
};
