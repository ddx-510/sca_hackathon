import React, { useState } from "react";
import {
  Container,
  Row,
  Form,
  Button,
  Alert,
  InputGroup,
  Spinner,
  CardColumns,
  Card,
} from "react-bootstrap";
import { searchArtworks } from "../../api";
import { dashboard } from "./dashboard";

function Homepage({ onLogout }) {
  const [isLoading, setIsLoading] = useState(false);
  const [noArtworksFound, setNoArtworksFound] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [artworks, setArtworks] = useState([]);
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(30);

  return dashboard(onLogout);
}

export default Homepage;
