import { create } from 'zustand'
import { persist, devtools } from "zustand/middleware"

export type User = {
    accountType: string,
    bio: string,
    email: string,
    id: string,
    name: string,
    profilePhoto: string
}

export const useAccessTokenStore = create<{ access_token: string }>()(persist((set) => ({
    access_token: "",
    setAccessToken: (at: string) => set((state: { access_token: string }) => ({ access_token: at }), true),
    removeAccessToken: () => set({ access_token: "" }),
}), {
    name: "accessToken"
}))

export type userStore = {
    user: User,
    addUser: (u: User) => void,
    removeUser: () => void
}

const useUserStore = create<userStore>((set, get) => ({
    user: {
        accountType: "",
        bio: "",
        email: "",
        id: "",
        name: "",
        profilePhoto: ""
    },
    addUser(u) {
        return set((state: userStore) => {
            var { user } = get();
            user = { ...user, ...u };
            return {
                user: user
            }
        })
    },
    removeUser() {
        return set((state: userStore) => {
            return {
                user: {
                    accountType: "",
                    bio: "",
                    email: "",
                    id: "",
                    name: "",
                    profilePhoto: ""
                }
            }
        })
    },
}));

export default useUserStore;