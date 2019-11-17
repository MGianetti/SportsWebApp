/** @format */

import React from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 300,
    },
    modalText: {
        padding: 10,
        margin: 20,
    },
    cancelButtom: {
        backgroundColor: '#ff9999',
    },
    confirmButtom: {
        backgroundColor: '#3ac5a9',
    },
}))

const ModalElement = ({openState, onCancel, onConfirm}) => {
    const classes = useStyles()
    return (
        <Modal open={openState}>
            <Grid container justify="center" alignItems="center" className={classes.container}>
                <Paper style={{width: 300, height: 200}}>
                    <Grid container direction="column" alignItems="center" justify="center">
                        <Grid item className={classes.modalText}>
                            <Typography>The deletion will be permanent, continue?</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row" spacing={4}>
                                <Grid item>
                                    <Button className={classes.cancelButtom} onClick={onCancel}>
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.confirmButtom} onClick={onConfirm}>
                                        Confirm
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Modal>
    )
}

export default ModalElement
