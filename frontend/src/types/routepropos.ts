import { NextPage } from 'next';

export interface Route {
    path: string;
    component: NextPage;
  }