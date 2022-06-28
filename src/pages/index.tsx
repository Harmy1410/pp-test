import type { NextPage } from 'next';

const Home: NextPage = () => {
    let name: string = 'hello world';
    return <div className="max-w-md">{name}</div>;
};

export default Home;
