import { match } from 'assert';
import type { NextPage } from 'next';
import { useEffect, useMemo, useState } from 'react';

export interface Post {
    name: string;
    comment: string;
}

const Home: NextPage = () => {
    let [name, setName] = useState('');
    let [comment, setComment] = useState('');
    let [posts, setPosts] = useState<Post[]>([]);

    const handleClick = () => {
        if (!name || !comment) {
            console.log('field empty');
            return;
            // return <div>Incomplete filed/fields</div>;
        }
        setPosts([{ name, comment }, ...posts]);
        console.log(posts);
    };

    const storeInput = (id: string, data: string) => {
        switch (id) {
            case 'name':
                setName(data);
                break;
            case 'comment':
                setComment(data);
                break;
        }
    };

    useEffect(() => {
        console.log('useEffect');
    }, [posts]);

    return (
        <div className="hero h-screen w-screen bg-base-300">
            <div className="flex flex-col self-start w-1/2 py-16 items-center">
                <div className="text-center pb-10">
                    <h1 className="text-5xl font-bold">Share a message...</h1>
                </div>
                <div className="card card-side w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="xyz"
                                id="name"
                                className="input input-bordered"
                                onChange={(e) => {
                                    storeInput(e.target.id, e.target.value);
                                }}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Comment</span>
                            </label>
                            <input
                                type="text"
                                id="comment"
                                placeholder="#whatever"
                                className="input input-bordered"
                                onChange={(e) =>
                                    storeInput(e.target.id, e.target.value)
                                }
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button
                                className="btn btn-primary"
                                onClick={() => handleClick()}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-side mt-10 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        {posts.map((post) => {
                            return (
                                <ul key={post.name}>
                                    <li>
                                        <b>{post.name}</b>
                                    </li>
                                    <li>{post.comment}</li>
                                </ul>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
