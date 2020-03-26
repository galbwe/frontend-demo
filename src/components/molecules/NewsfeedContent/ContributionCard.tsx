import React from 'react';
// import styled from 'styled-components';
import {Entity} from '../../../types';

export type ContributionCardProps = {
    content: {
        politician: Entity,
        acceptedAmount: string,
        contributor: string,
    }
}

export default function ContributionCard({content}:any){
    console.log("Contribution content", content)
    return <div>ContributionCard</div>
}