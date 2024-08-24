import { useContext } from 'react'
import AuthContext from '../Auth/context';

const useAuth = () => {
  const username = useContext(AuthContext)
  return username
}
export default useAuth