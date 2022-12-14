# -*- coding: utf-8 -*-
{
    'name': "create_pos_product",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'point_of_sale'],
    # 'qweb': ['static/src/xml/btn_product.xml'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        # 'views/pos_view.xml',
        'views/pos_templates.xml',
    ],
    'assets': {
        'point_of_sale.assets': [
            '/create_pos_product/static/src/js/AddProductPopup.js',
            '/create_pos_product/static/src/js/add_product_btn.js',
            '/create_pos_product/static/src/js/ProductListScreen.js',
            '/create_pos_product/static/src/css/label.css',
            '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">',
        ],
        'web.assets_qweb': [
            '/create_pos_product/static/src/xml/Add_product_popup.xml',
            '/create_pos_product/static/src/xml/Add_product_btn.xml',
            '/create_pos_product/static/src/xml/ProductListScreen.xml',
        ],
    },
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'images': ['/create_pos_product/static/description/icon.png'],
}
