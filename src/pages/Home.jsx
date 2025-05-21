import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import GroupSection from '../components/GroupSection';

const Home = () => {
    
    const groups = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <GroupSection groups={groups}></GroupSection>
        </div>
    );
};

export default Home;