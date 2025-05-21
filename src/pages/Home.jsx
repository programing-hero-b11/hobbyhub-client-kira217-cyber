import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import GroupSection from '../components/GroupSection';
import GroupContent from '../components/GroupContent';
import GroupStep from '../components/GroupStep';

const Home = () => {
    
    const groups = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <GroupSection groups={groups}></GroupSection>
            <GroupContent></GroupContent>
            <GroupStep></GroupStep>
        </div>
    );
};

export default Home;