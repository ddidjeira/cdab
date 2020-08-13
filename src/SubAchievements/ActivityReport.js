import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import filePdf from "../assets/activityReport/Rp1.pdf";
import filePdf2 from "../assets/activityReport/Rp2.pdf";
import filePdf3 from "../assets/activityReport/Rp3.pdf";
import filePdf4 from "../assets/activityReport/Rp4.pdf";
import filePdf5 from "../assets/activityReport/Rp5.pdf";
import filePdf6 from "../assets/activityReport/Rp6.pdf";
import filePdf7 from "../assets/activityReport/Rp7.pdf";
import filePdf8 from "../assets/activityReport/Rp8.pdf";
import filePdf9 from "../assets/activityReport/Rp9.pdf";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    titles: {
        marginBottom: "100px",
        textAlign: "center"
    },
    title: {
        fontSize: "60px",
        fontWeight: "bold",
        textDecoration: "underline"
    },
});

class StudentProfil extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px",marginLeft: "200px",marginRight: "200px"}}>

                    <div className={classes.titles}>
                        <p className={classes.title}>RAPPORT D'ACTIVITÉ</p>
                    </div>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                2016 1-Rapport CDAB RAPPORT TRIMESTRIEL T1
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a target="_blank" href={filePdf}>Voir le contenu</a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                2016 2-Rapport CDAB RAPPORT TRIMESTRIEL T2
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a target="_blank" href={filePdf2}>Voir le contenu</a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                2016 3-Rapport CDAB RAPPORT TRIMESTRIEL T3
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a target="_blank" href={filePdf3}>Voir le contenu</a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                2016 4-Rapport CDAB RAPPORT TRIMESTRIEL T4
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a target="_blank" href={filePdf4}>Voir le contenu</a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                2017 2-Rapport CDAB RAPPORT TRIMESTRIEL T2
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a target="_blank" href={filePdf5}>Voir le contenu</a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                2017 3-Rapport CDAB RAPPORT TRIMESTRIEL T3
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a target="_blank" href={filePdf6}>Voir le contenu</a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                2017 4-Rapport CDAB RAPPORT TRIMESTRIEL T4
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a target="_blank" href={filePdf7}>Voir le contenu</a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                2018 1-Rapport CDAB RAPPORT TRIMESTRIEL T1
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a target="_blank" href={filePdf8}>Voir le contenu</a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                2019 1-Rapport CDAB RAPPORT TRIMESTRIEL T1
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a target="_blank" href={filePdf9}>Voir le contenu</a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                </div>
            </div>
        );
    }
}


export default withStyles(styles)(StudentProfil);
