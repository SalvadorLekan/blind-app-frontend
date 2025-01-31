import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Button from "../components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Talking Stage</title>
        <meta name="description" content="Finding Love is now easier" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Finding love is now easier</h1>

        <p className={styles.description}>
          With Talking Stage, you get to anonymously meet people who you are ste up with and see if they are the one.
        </p>
      </main>
      <Button size="normal">Normal</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button size="normal" component="a" href="/">
        As a tag
      </Button>
      <Link href="/" passHref>
        <Button size="normal" component="a">
          As Next Link
        </Button>
      </Link>
      <footer className={styles.footer}>
        <p className="text-red-600">Made with love by Q Devs</p>
      </footer>
    </div>
  );
}
