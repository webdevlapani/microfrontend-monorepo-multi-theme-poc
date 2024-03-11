import axios from 'axios';

export const fetchPermissions = async (companyId: string) => {
  try {
    const { data }: any = await axios.get(
      `http://localhost:8000/permissions/${companyId}`
    );
    console.log('data', data);
    return data;
  } catch (err) {
    console.log('error');
  }
};

export const fetchTheme = async (companyId: string) => {
  try {
    const { data }: any = await axios.get(
      `http://localhost:8000/theme/${companyId}`
    );
    console.log('data', data);
    return data;
  } catch (err) {
    console.log('error');
  }
};
