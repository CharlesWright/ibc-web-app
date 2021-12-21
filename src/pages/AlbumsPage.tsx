import { Grid } from "@mui/material"
import { useContext } from "react"
import AlbumCard from "../components/Albums/AlbumCard"
import { AlbumContext } from "../contexts/AlbumContext"
import { SongContext } from "../contexts/SongContext"

export default function AlbumsPage() {
    const albums = useContext(AlbumContext).albums
    const songs = useContext(SongContext).songs
    
    return (
        <Grid container columns={3} >
            {albums?.map(album =>
                <Grid item key={album.RowKey} >
                    <AlbumCard album={album} songs={songs}/>                        
                </Grid>
            )}
        </Grid>
    )
}