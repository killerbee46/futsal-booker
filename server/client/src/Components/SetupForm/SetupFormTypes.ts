export enum FORMSTATE {
  ORGANIZATIION_DETAIL = 'ORGANIZATION_DETAIL',
  SUPER_ADMIN = 'SUPER_ADMIN',
  DEPARTMENT = 'DEPARTMENT'
}

export interface SetupFormTypes {
  updateFormState?: VoidFunction;
  formData?: VoidFunction;
  updateFormData?: VoidFunction;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface CompanyInfoFormTypes {
  org_name?: string;
}

export default SetupFormTypes;
