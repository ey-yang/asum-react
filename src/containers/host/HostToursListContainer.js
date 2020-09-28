import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HostToursList from '../../components/host/HostToursList';
import { toursList } from '../../modules/host/hostToursList';

const HostToursListContainer = ({ location, match }) => {
    const dispatch = useDispatch();
    const { hostToursList, hostToursListError, loading } = useSelector(
        ({ hostToursList, loading }) => ({
            hostToursList: hostToursList.hostToursList,
            hostToursListError: hostToursList.hostToursListError,
            loading: loading['hostToursList/TOURS_LIST'],
        }),
    );
    useEffect(() => {
        const { email } = match.params;
        const { title, image, price } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(toursList({ title, image, price, email }));
    }, [dispatch, location.search, match.params]);


    return (
        <>
        <HostToursList
        loading={loading}
        hostToursListError={hostToursListError}
        hostToursList={hostToursList}
        />
        </>
    )
}

export default withRouter(HostToursListContainer);