import watchFetchAmbitionHeaders from '../ambition-header/saga';


const root = function* rootSaga() {
  yield [
    watchFetchAmbitionHeaders()
  ];
};

export default root;