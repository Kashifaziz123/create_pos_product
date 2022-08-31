odoo.define('create_pos_product.CustomListScreen', function(require) {
    'use strict';

    const { debounce } = owl.utils;
    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');
    const { useListener } = require('web.custom_hooks');
    const { isConnectionError } = require('point_of_sale.utils');
    const { useAsyncLockedMethod } = require('point_of_sale.custom_hooks');
    const ajax = require('web.ajax');

    class CustomListScreen extends PosComponent {
        constructor() {
            super(...arguments);
//            useListener('update-search', this._updateSearch);
//            this.searchWordInput = useRef('search-word-input');
//            this.updateSearch = debounce(this.updateSearch, 100);

            this.state = {
                query: null,
//                selectedProduct: this.props.product,
                detailIsShown: false,
                isEditMode: false,
                editModeProps: {
                    partner: {
                        country_id: this.env.pos.company.country_id,
                        state_id: this.env.pos.company.state_id,
                    }
                },
            };
            this.updateProductList = debounce(this.updateProductList, 70);
        }
        // Lifecycle hooks
        back() {
            if(this.state.detailIsShown) {
                this.state.detailIsShown = false;
                this.render();
            } else {
                this.props.resolve({ confirmed: false, payload: false });
                this.trigger('close-temp-screen');
            }
        }
//        confirm() {
//            this.props.resolve({ confirmed: true, payload: this.state.selectedProduct });
//            this.trigger('close-temp-screen');
//        }
        // Getters
        async button_click()
        {
            var self = this;
            const {
                confirmed,
                payload
            } = await this.showPopup('Add_product_popup', {
                title: this.env._t(' Add Product'),
                body: this.env._t('Add New Product'),
            });
            if (confirmed) {
                var product_category = payload[0];
                var product_name = payload[1];
                var product_price = payload[2];
                var product_type = payload[3];
                var product_uom = payload[4];
                var product_barcode = payload[5];
                ajax.jsonRpc('/Add_Product', 'call', {
                    'category': product_category,
                    'name': product_name,
                    'price': product_price,
                    'uom': product_uom,
                    'type': product_type,
                    'barcode': product_barcode,
                }).then(function(response) {});
            }
        }
//        confirm() {
//            this.props.resolve({ confirmed: true, payload: this.state.selectedProduct });
//            this.trigger('close-temp-screen');
//        }

        get currentOrder() {
            return this.env.pos.get_order();
        }
//        get nextButton() {
//            if (!this.props.product) {
//                return { command: 'set', text: this.env._t('Set Product') };
//            } else if (this.props.product && this.props.product === this.state.selectedProduct) {
//                return { command: 'deselect', text: this.env._t('Deselect Product') };
//            } else {
//                return { command: 'set', text: this.env._t('Change Product') };
//            }
//        }

        get products() {
            let res;
           res = this.env.pos.db.get_product_by_category(0);
            return res.sort(function (a, b) { return (a.name || '').localeCompare(b.name || '') });
        }
        async updateProductList(event) {
            alert("Hello")
        }
//        clickNext() {
//            this.state.selectedProduct = this.nextButton.command === 'set' ? this.state.selectedProduct : null;
//            this.confirm();
//        }
    }
    CustomListScreen.template = 'CustomListScreen';

    Registries.Component.add(CustomListScreen);

    return CustomListScreen;
});
