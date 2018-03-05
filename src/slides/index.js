import React from 'react';
import MdSlide from '../MdSlide';
import SvgSlide from '../SvgSlide';

import basics from './basics.jpg';
import syntax from './syntax.jpg';
import server from './server.jpg';
import client from './client.jpg';
import epilogue from './epilogue.png';

import whoami from './whoami.md';
import whatisgraphql from './whatisgraphql.md';
import express from './express.md';
import schema from './schema.md';
import schema2 from './schema2.md';
import resolvers from './resolvers.md';
import connection from './connection.md';
import query from './query.md';
import properties from './properties.md';
import polling from './polling.md';
import mutation from './mutation.md';
import mutation2 from './mutation2.md';
import features from './features.md';
import likes from './likes.md';
import dislikes from './dislikes.md';

import Query from './Query';
import Properties from './Properties';
import Polling from './Polling';
import Mutation from './Mutation';

import CoverSlide from '../CoverSlide';

const slides = [
  { headline: 'Me', component: () => <MdSlide content={whoami} /> },
  {
    background: basics,
    component: () => (
      <CoverSlide title="Part I" subtitle="Prologue - Basics and Essentials" />
    )
  },
  {
    headline: 'What is GraphQL',
    component: () => <MdSlide content={whatisgraphql} />
  },
  {
    background: syntax,
    component: () => (
      <CoverSlide image={syntax} title="Part II" subtitle="Querying Syntax" />
    )
  },
  { headline: 'Querying the Graph', withGraphiQL: true },
  { headline: 'Using Arguments', withGraphiQL: true },
  { headline: 'Using Variables', withGraphiQL: true },
  { headline: 'Using Fragments', withGraphiQL: true },
  {
    background: server,
    component: () => <CoverSlide title="Part III" subtitle="The Server Side" />
  },
  {
    headline: 'Express Setup',
    component: () => <MdSlide content={express} />
  },
  {
    headline: 'Type Definitions of the Schema',
    component: () => <MdSlide content={schema} />
  },
  {
    headline: 'Example Type Definition',
    component: () => <MdSlide content={schema2} />
  },
  {
    headline: 'Resolvers of the Schema',
    component: () => <MdSlide content={resolvers} />
  },
  {
    background: client,
    component: () => <CoverSlide title="Part IV" subtitle="The Client Side" />
  },
  {
    headline: 'Setting up the Connection',
    component: () => <MdSlide content={connection} />
  },
  {
    headline: 'Creating a Data Aware Component',
    component: () => <MdSlide content={query} />
  },
  {
    headline: 'Result: Data Aware Component',
    component: () => <Query />
  },
  {
    headline: 'Use Component Properties',
    component: () => <MdSlide content={properties} />
  },
  {
    headline: 'Result: Properties',
    component: () => <Properties />
  },
  {
    headline: 'Refetch and Polling',
    component: () => <MdSlide content={polling} />
  },
  {
    headline: 'Result: Polling',
    component: () => <Polling />
  },
  {
    headline: 'Mutation',
    component: () => <MdSlide content={mutation} />
  },
  {
    headline: 'Mutation (continued)',
    component: () => <MdSlide content={mutation2} />
  },
  {
    headline: 'Result: Mutation',
    component: () => <Mutation />
  },
  {
    background: epilogue,
    component: () => (
      <CoverSlide title="Part V" subtitle="Epilogue - Pros and Contras" />
    )
  },
  {
    headline: 'Features, Features, Features',
    component: () => <MdSlide content={features} />
  },
  {
    headline: "What I don't like?",
    component: () => <MdSlide content={dislikes} />
  },
  {
    headline: 'What I like?',
    component: () => <MdSlide content={likes} />
  }
];

export default slides;
