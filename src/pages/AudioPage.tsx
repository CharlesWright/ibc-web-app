import { Grid } from "@mui/material";
import { useContext } from "react";
import AudioCard from "../components/Audio/AudioCard";
import { SongContext } from "../contexts/SongContext";

export default function AudioPage() {
    const songs = useContext(SongContext).songs
    
    return (
        <Grid container columns={3} >
            {songs?.map(song =>
                <Grid item key={song.RowKey} >
                    <AudioCard song={song} />                        
                </Grid>
            )}
        </Grid>
    )
}