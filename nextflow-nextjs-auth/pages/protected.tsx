import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const currentSession = await getSession(context);
    return {
        props: {
            session: currentSession
        }
    }
}

const ProtectedPage: NextPage = ({ session }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const router = useRouter()

    useSession({
        required: true,
        onUnauthenticated: () => {
            router.push("/signin");
        }
    })

    const onSignOut = () => {
        signOut();
    }

    return (
        <div>
            <h1>Protected Page</h1>
            <p>Role : {session?.role}</p>
            <a onClick={onSignOut}>Sign out</a>
        </div>
    )
}

export default ProtectedPage