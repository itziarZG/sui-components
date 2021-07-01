import MoleculePhotoUploader, {
  MoleculePhotoUploaderRotationDirection
} from 'components/molecule/photoUploader/src'

const lineStyles = {
  color: 'black',
  paddingLeft: 20
}

const _maxPhotos = 10
const _mainPhotoLabel = 'PRINCIPAL'
const _addPhotoTextSkeleton = 'Añadir más'
const _dropPhotosHere = 'Suelta las fotos aquí'
const _addPhotoTextButton = 'Seleccionalas de tu dispositivo'
const _allowUploadDuplicatedPhotos = true
const _dragDelay = 0
const _dragPhotoTextInitialContent = 'Arrastra las fotos aquí'
const _limitPhotosUploaded = 'Ha alcanzado el límite de fotografías'
const _limitPhotosUploadedNotification = 'Máximo de fotografias alcanzado'
const _errorFormatPhotoUploaded =
  'Las fotografías deben tener formato JPEG, PNG, GIF, BMP o WEBP'
const _errorCorruptedPhotoUploaded = 'Archivo %{filepath} ha fallado'
const _errorInitialPhotoDownloadError = 'Error al descargar imágenes'
const _errorFileExcededMaxSize =
  'Las fotografías deben tener un peso máximo de 50 MB'
const _notificationErrorFormatPhotoUploaded =
  'Sólo se aceptan los formatos: formato JPEG, PNG, GIF, BMP o WEBP'
const _uploadingPhotosText = 'Subiendo imágenes...'
const _rotationDirection = MoleculePhotoUploaderRotationDirection.clockwise

const initialPhotos = [
  {
    url: 'https://picsum.photos/seed/---all---/200/200',
    id: '9cded3e2-7fc6-4999-acc5-1fd42d6ea49a'
  },
  {
    url: 'https://picsum.photos/seed/--your---/800/300',
    id: '6c7ee3d8-97db-4142-8520-5136fccfc40b'
  },
  {url: 'https://FAILUM.FAILED/FAIL/--base---/200/800'},
  {url: 'https://picsum.photos/seed/---are---/800/600'},
  {url: 'https://picsum.photos/seed/--belong-/200/300'},
  {url: 'https://picsum.photos/seed/---to----/200/300'},
  {url: 'https://picsum.photos/seed/---us----/200/300'}
]

const _callbackPhotosUploaded = list => {
  console.log('_callbackPhotosUploaded: ', list)
}
const _callbackPhotosRejected = list => {
  console.log('_callbackPhotosRejected: ', list)
}

const _callbackUploadPhoto = (file, oldUrl) => {
  const url = {url: `https://pre.cdn.coches.net/${Date.now()}`}
  return Promise.resolve(url)
}

const _infoIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12,2 C17.514,2 22,6.486 22,12 C22,17.515 17.514,22 12,22 C6.486,22 2,17.515 2,12 C2,6.486 6.486,2 12,2 Z M12,4 C7.589,4 4,7.589 4,12 C4,16.411 7.589,20 12,20 C16.411,20 20,16.411 20,12 C20,7.589 16.411,4 12,4 Z M12,10 C12.552,10 13,10.448 13,11 L13,11 L13,15 L15,15 L15,17 L9,17 L9,15 L11,15 L11,12 L10,12 L10,10 Z M12,6.75 C12.69,6.75 13.25,7.31 13.25,8 C13.25,8.69 12.69,9.25 12,9.25 C11.31,9.25 10.75,8.69 10.75,8 C10.75,7.31 11.31,6.75 12,6.75 Z" />
  </svg>
)

const _rotateIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12.00002,10 C13.1040222,10 14.000024,10.8960018 14.000024,12 L14.000024,12 L14.000024,20.00002 C14.000024,21.1050222 13.1040222,22.000024 12.00002,22.000024 L12.00002,22.000024 L4,22.000024 C2.89500179,22.000024 2,21.1050222 2,20.00002 L2,20.00002 L2,12 C2,10.8960018 2.89500179,10 4,10 L4,10 Z M12.00002,12.000004 L4.000004,12.000004 L4.000004,20.00002 L12.00002,20.00002 L12.00002,12.000004 Z M12.523454,4.567749 L13.7136402,3.34031375 L12.4120754,2 L8.99984,5.51630792 L12.4120754,9.03166727 L13.7136402,7.69135352 L12.523454,6.46486684 C16.7963422,6.80445093 20.1588714,10.4962422 20.1588714,15 L21.99984,15 C21.99984,9.48318132 17.8723883,4.96519518 12.6366735,4.56205764 L12.523454,4.567749 Z" />
  </svg>
)

const _deleteIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M19.3546326,7.26315789 L19.3546326,19.8947368 C19.3546326,21.0557895 18.410422,22 17.2493694,22 L17.2493694,22 L6.72305361,22 C5.56200098,22 4.61779045,21.0557895 4.61779045,19.8947368 L4.61779045,19.8947368 L4.61779045,7.26315789 L19.3546326,7.26315789 Z M17.2493694,9.36842105 L6.72305361,9.36842105 L6.72305361,19.8947368 L17.250422,19.8947368 L17.2493694,9.36842105 Z M10.9335799,11.4736842 L10.9335799,17.7894737 L8.82831677,17.7894737 L8.82831677,11.4736842 L10.9335799,11.4736842 Z M15.1441062,11.4736842 L15.1441062,17.7894737 L13.0388431,17.7894737 L13.0388431,11.4736842 L15.1441062,11.4736842 Z M15.1441062,2 L15.1441062,4.10526316 L21.0275853,4.10526316 L21.0275853,6.21052632 L3,6.21052632 L3,4.10526316 L8.82831677,4.10526316 L8.82831677,2 L15.1441062,2 Z" />
  </svg>
)

const _dragPhotosIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M11.2776977,7.5 C11.4643451,7.5 11.6432156,7.56726701 11.7754242,7.67190458 L11.7832012,7.66443047 L20.7189475,14.8694748 C21.0533575,15.1385428 21.0922424,15.6094119 20.8200482,15.9233246 C20.7033936,16.0578586 20.5400771,16.147548 20.3767605,16.1774444 L17.9192359,16.6408394 L19.6301708,20.1760945 C19.8323722,20.5498001 19.6457247,20.9907728 19.2568759,21.1626774 L16.4416103,22.4258023 C16.0527614,22.605181 15.5861428,22.4482247 15.4072724,22.0745191 L13.7118914,18.5317898 L11.7598702,20.0415605 C11.6276616,20.1461981 11.4643451,20.205991 11.2776977,20.205991 C10.8481871,20.205991 10.5,19.8713636 10.5,19.4585797 L10.5,8.24741123 C10.5,7.83462741 10.8481871,7.5 11.2776977,7.5 Z M12.0553954,9.83192305 L12.0553954,17.8890162 L13.4708051,16.7903216 L13.6652296,16.6707358 C14.0540784,16.4913571 14.51292,16.6557876 14.6995675,17.0294932 L16.4882721,20.7590753 L17.888128,20.1237757 L16.0916463,16.4016678 C15.9049989,16.0279622 16.0760924,15.5795154 16.4649412,15.4076109 L16.6826966,15.347818 L18.4714012,15.0114829 L12.0553954,9.83192305 Z M7.5,4.5 L17.3619468,4.5041143 C18.1380917,4.56137616 18.75,5.20922865 18.75,6 L18.75,6 L18.75,11.775 L17.25,10.575 L17.25,6 L7.5,6 L7.5,15.75 L9,15.75 L9,17.25 L7.38805324,17.2458857 C6.61190834,17.1886238 6,16.5407713 6,15.75 L6,15.75 L6,6 L6.0041143,5.88805324 C6.06137616,5.11190834 6.70922865,4.5 7.5,4.5 L7.5,4.5 Z M4.5,1.5 L15.002523,1.50471054 C15.4153974,1.50489572 15.75,1.83964848 15.75,2.2525229 C15.75,2.6653431 15.4153431,3 15.0025229,3 L15.0025229,3 L4.5,3 L4.5,13.5025229 C4.5,13.9153431 4.1653431,14.25 3.7525229,14.25 C3.33969278,14.25 3.00501836,13.915353 3.00498452,13.5025229 L3.00498452,13.5025229 L3.0041143,2.88805324 C3.06137616,2.11190834 3.70922865,1.5 4.5,1.5 L4.5,1.5 Z" />
  </svg>
)

const _rejectPhotosIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12,2 C17.514,2 22,6.486 22,12 C22,17.515 17.514,22 12,22 C6.486,22 2,17.515 2,12 C2,6.486 6.486,2 12,2 Z M12,4 C7.589,4 4,7.589 4,12 C4,16.411 7.589,20 12,20 C16.411,20 20,16.411 20,12 C20,7.589 16.411,4 12,4 Z M12,14.75 C12.69,14.75 13.25,15.31 13.25,16 C13.25,16.69 12.69,17.25 12,17.25 C11.31,17.25 10.75,16.69 10.75,16 C10.75,15.31 11.31,14.75 12,14.75 Z M13,6 L13,13 L11,13 L11,6 L13,6 Z" />
  </svg>
)

const _addMorePhotosIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22 10.8888889 13.1111111 10.8888889 13.1111111 2 10.8888889 2 10.8888889 10.8888889 2 10.8888889 2 13.1111111 10.8888889 13.1111111 10.8888889 22 13.1111111 22 13.1111111 13.1111111 22 13.1111111z" />
  </svg>
)

const _retryErrorPhotosIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12,2 C9.285,2 6.78,3.089 4.938,4.938 L3,3 L3,9 L9,9 L6.351,6.351 C7.824,4.871 9.828,4 12,4 C16.411,4 20,7.589 20,12 C20,16.411 16.411,20 12,20 C7.589,20 4,16.411 4,12 L2,12 C2,17.514 6.486,22 12,22 C17.514,22 22,17.514 22,12 C22,6.486 17.514,2 12,2" />
  </svg>
)

const Demo = () => {
  return (
    <div>
      <h1>Photo Uploader</h1>

      <MoleculePhotoUploader
        addMorePhotosIcon={_addMorePhotosIcon}
        addPhotoTextButton={_addPhotoTextButton}
        addPhotoTextSkeleton={_addPhotoTextSkeleton}
        callbackPhotosRejected={_callbackPhotosRejected}
        callbackPhotosUploaded={_callbackPhotosUploaded}
        callbackUploadPhoto={_callbackUploadPhoto}
        deleteIcon={_deleteIcon}
        dragPhotosIcon={_dragPhotosIcon}
        dragPhotoTextInitialContent={_dragPhotoTextInitialContent}
        dropPhotosHereText={_dropPhotosHere}
        errorCorruptedPhotoUploadedText={_errorCorruptedPhotoUploaded}
        errorFileExcededMaxSizeText={_errorFileExcededMaxSize}
        errorFormatPhotoUploadedText={_errorFormatPhotoUploaded}
        errorInitialPhotoDownloadErrorText={_errorInitialPhotoDownloadError}
        infoIcon={_infoIcon}
        limitPhotosUploadedText={_limitPhotosUploaded}
        limitPhotosUploadedNotification={_limitPhotosUploadedNotification}
        mainPhotoLabel={_mainPhotoLabel}
        maxPhotos={_maxPhotos}
        notificationErrorFormatPhotoUploaded={
          _notificationErrorFormatPhotoUploaded
        }
        rejectPhotosIcon={_rejectPhotosIcon}
        retryIcon={_retryErrorPhotosIcon}
        rotateIcon={_rotateIcon}
        uploadingPhotosText={_uploadingPhotosText}
      />

      <h1 style={lineStyles}>Molecule PhotoUploader with initialPhotos</h1>
      <p style={lineStyles}>
        This example has an array of URLs passed by props, and the third one
        fails on load, so it shows an error notification.
      </p>
      <p style={lineStyles}>
        Also, in this example we're blocking .bmp images, which are accepted by
        default.
      </p>
      <p style={lineStyles}>
        Also, rotation direction is set to clockwise. rotateIcon not changed,
        though :P
      </p>
      <p style={lineStyles}>
        Also, dragDelay time set to 0, it must be 0 to improve user experience
        in desktop!
      </p>
      <MoleculePhotoUploader
        acceptedFileTypes="image/jpeg, image/gif, image/png, image/webp"
        addMorePhotosIcon={_addMorePhotosIcon}
        addPhotoTextButton={_addPhotoTextButton}
        addPhotoTextSkeleton={_addPhotoTextSkeleton}
        allowUploadDuplicatedPhotos={_allowUploadDuplicatedPhotos}
        callbackPhotosRejected={_callbackPhotosRejected}
        callbackPhotosUploaded={_callbackPhotosUploaded}
        deleteIcon={_deleteIcon}
        dragDelay={_dragDelay}
        dragPhotosIcon={_dragPhotosIcon}
        dragPhotoTextInitialContent={_dragPhotoTextInitialContent}
        dropPhotosHereText={_dropPhotosHere}
        errorCorruptedPhotoUploadedText={_errorCorruptedPhotoUploaded}
        errorFileExcededMaxSizeText={_errorFileExcededMaxSize}
        errorFormatPhotoUploadedText={_errorFormatPhotoUploaded}
        errorInitialPhotoDownloadErrorText={_errorInitialPhotoDownloadError}
        infoIcon={_infoIcon}
        initialPhotos={initialPhotos}
        limitPhotosUploadedText={_limitPhotosUploaded}
        limitPhotosUploadedNotification={_limitPhotosUploadedNotification}
        mainPhotoLabel={_mainPhotoLabel}
        maxPhotos={_maxPhotos}
        notificationErrorFormatPhotoUploaded={
          _notificationErrorFormatPhotoUploaded
        }
        rejectPhotosIcon={_rejectPhotosIcon}
        retryIcon={_retryErrorPhotosIcon}
        rotateIcon={_rotateIcon}
        rotationDirection={_rotationDirection}
        uploadingPhotosText={_uploadingPhotosText}
      />
    </div>
  )
}

export default Demo
