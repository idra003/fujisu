import * as React from 'react';
import styles from './OfferContract.module.scss';
import { Card, Grid, Typography } from "@mui/material";
import { JobOfferContext } from '../../App';
import { TranslationsContext } from '../../translations/TranslationsContext';
import { IContract } from '../../models/IContract';
import { ITranslations } from '../../translations/ITranslations';
import { Format } from '../../helpers/Format';

/**
 * Renders out the contract info offered to the applicant
 */
export function OfferContract(props:{}) {
    const _offer = React.useContext(JobOfferContext);
    const _translations = React.useContext(TranslationsContext);

    const _contract:IContract|null = _offer?.value?.contract || null;

    

    return (
        <Card variant='informationGroup'>
            <Typography
                variant={'h5'}
            >
                {_translations?.phrases.contract}
            </Typography>
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IContract_contractType}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ _translations?.phrases[`ContractType_${_contract?.contractType}` as keyof ITranslations] || _contract?.contractType }</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IContract_positionName}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ _contract?.positionName }</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IContract_structureTreeFullPath}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ _contract?.structureTreeFullPath }</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IContract_startDate}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ Format.isoDate(_contract?.startDate) }</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IContract_endDate}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ Format.isoDate(_contract?.endDate) }</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IContract_fteWorkload}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ Format.number(_contract?.fteWorkload, 3) }</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IContract_remunerationType}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ _translations?.phrases[`RemunerationType_${_contract?.remunerationType}` as keyof ITranslations] || _contract?.remunerationType }</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IContract_remunerationGrossAmount}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ Format.number(_contract?.remunerationGrossAmount, 0) }</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IContract_remunerationCurrency}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ _contract?.remunerationCurrency }</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IContract_probationaryPeriodStartDate}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ Format.isoDate(_contract?.probationaryPeriodStartDate) }</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">{_translations?.phrases.IContract_probationaryPeriodEndDate}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">{ Format.isoDate(_contract?.probationaryPeriodEndDate) }</Typography>
                </Grid>
            </Grid>
            {
                _offer?.value?.benefits.length &&
                <>
                    <Typography 
                        variant="body1"
                        sx={{
                            marginTop: '1em'
                        }}
                    >
                        {_translations?.phrases.benefits}
                    </Typography>
                    <ul className={styles.benefits}>
                        {
                            _offer?.value?.benefits.map((str:string) => (
                                <li>{str}</li>
                            ))
                        }
                    </ul>
                </>
            }
        </Card>
    );
}