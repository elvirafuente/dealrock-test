import { useState, useEffect } from 'react';
import { getUser } from '../services/services';
import { UserInfo } from '../types';

export const useUser = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getUser()
      .then((res) => {
        const { id, username, full_name, avatar } = res.data;
        setUserInfo({ id, username, full_name, avatar });
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  return {
    userInfo,
    isLoading,
  };
};
