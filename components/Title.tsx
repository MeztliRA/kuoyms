import Head from "next/head";

interface Props {
    title: string
}

export default function Title(props:Props) {
    return (
        <Head>
            <title>{props.title} - Kuoyms</title>
        </Head>
    )
}