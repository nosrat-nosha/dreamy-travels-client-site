import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
	const [users, setUsers] = useState({});
	const [isLoading, setLoading] = useState(true);
	const auth = getAuth();

	const signInUsingGoogle = () => {
		setLoading(true);
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider)
			.then((result) => {
				setUsers(result.user);
			})
			.finally(() => setLoading(false));
	};
	//observer user state change
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUsers(user);
			} else {
				setUsers({});
			}
			setLoading(false);
		});
		return () => unsubscribed;
	}, []);
	const logOut = () => {
		setLoading(true);
		signOut(auth)
			.then(() => {})
			.finally(() => setLoading(false));
	};
	return {
		users,
		signInUsingGoogle,
		logOut,
		isLoading,
	};
};
export default useFirebase;
