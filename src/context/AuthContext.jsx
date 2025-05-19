import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Register
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = (authProvider) => {
    return signInWithPopup(auth, authProvider);
  };

  // Update Profile
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  // Auth State Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    setUser,
    register,
    logIn,
    updateUser,
    googleLogin,
    logout
  };

  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
