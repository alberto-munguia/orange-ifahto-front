export const InputEffect = () => {
    const elements = document
        .querySelectorAll('.form-type-material .form-control:not(.bootstrap-select)')

    elements.forEach(e => e.addEventListener('focus', e => doFloat(e.target)))
    elements.forEach(e => e.addEventListener('focusout', e => {
        if (e.target.value === '') {
            noFloat(e.target)
        }
    }))
}

export const doFloat = (event) => {
    event.parentElement.classList.add('do-float')
}

export const noFloat = (event) => {
    event.parentElement.classList.remove('do-float')
}
