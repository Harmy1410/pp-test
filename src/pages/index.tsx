import type { NextPage } from 'next';

const Home: NextPage = () => {
    let name: string = 'hello world';
    return <div className="max-w-md text-3xl font-bold">{name}</div>;
};

export default Home;
