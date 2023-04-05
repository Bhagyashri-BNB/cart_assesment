 const AddProductProps = () => {
    return[
        {
            label: 'Product Title *',
            value: '',
            size: 'small',
            autoFocus: true,
            type: 'text',
            typeValue: 'text',
            variant: 'outlined',
            placeholder: '',
            field: 'title',      // this will be field name by which we are going to access the data
            // validators: [
            //     { check: Validators.required, message: "This field is mandatory" },
            // ],
            sx : {width : '300px', marginTop : '20px'},
            // style : { backgroundColor : 'pink'},
            responsive: { xs: 12 },
            required: true,
        },
        {
            label: 'Product Price *',
            value: '',
            size: 'small',
            autoFocus: true,
            type: 'text',
            typeValue: 'text',
            variant: 'outlined',
            placeholder: '',
            field: 'price',      // this will be field name by which we are going to access the data
            // validators: [
            //     { check: Validators.required, message: "This field is mandatory" },
            // ],
            sx : {width : '300px', marginTop : '20px'},
            // style : { backgroundColor : 'pink'},
            responsive: { xs: 12 },
            required: true,
        },
        {
            label: 'Product Size *',
            value: '',
            size: 'small',
            autoFocus: true,
            type: 'text',
            typeValue: 'text',
            variant: 'outlined',
            placeholder: '',
            field: 'size',      // this will be field name by which we are going to access the data
            // validators: [
            //     { check: Validators.required, message: "This field is mandatory" },
            // ],
            sx : {width : '300px', marginTop : '20px'},
            // style : { backgroundColor : 'pink'},
            responsive: { xs: 12 },
            required: true,
        },
    ]
}
export default AddProductProps