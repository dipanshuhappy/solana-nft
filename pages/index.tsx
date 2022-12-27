import {
  Box,
  Center,
  Text,
  Spacer,
  Stack,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Disconnected from "../components/Disconnected";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import { useWallet } from "@solana/wallet-adapter-react";
import Connected from "../components/Connected";
import MainLayout from "../components/MainLayout";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { MouseEventHandler, useCallback } from "react";

const Home: NextPage = () => {
  const { connected } = useWallet();

  return (
    <MainLayout>
      <>{connected ? <Connected /> : <Disconnected />}'</>
    </MainLayout>
  );
};

export default Home;
