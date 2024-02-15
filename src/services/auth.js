import supabase from "./supabaseCreateClient";

export async function login({ email, password }) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) throw new Error(error.message);

	return data;
}

export async function authGoogle() {
	supabase.auth.signInWithOAuth({
		provider: "google",
	});
}

export async function signup({ fullName, email,phone, password }) {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
        phone,
		options: {
			data: {
				fullName
			},
		},
	});

	if (error) throw new Error(error.message);

	return data;
}

export async function getCurrentUser() {
	const { data: session } = await supabase.auth.getSession();

	if (!session.session) return null;

	const { data, error } = await supabase.auth.getUser();

	if (error) throw new Error(error.message);

	return data?.user;
}
export async function logout() {
	const { error } = await supabase.auth.signOut();
	if (error) throw new Error(error.message);
}