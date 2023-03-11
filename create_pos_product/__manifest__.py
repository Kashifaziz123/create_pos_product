# -*- coding: utf-8 -*-
{
    'name': "Odoo POS Add Product",
    'summary': """
        Add product in odoo point of sale screen""",
    'description': """
        Long description of module's purpose
    """,
    'author': "Alhaditech",
    'website': "http://www.alhaditech.com",
    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Point of Sale',
    'version': '0.1',
    'price': 18, 'currency': 'USD',
    # any module necessary for this one to work correctly
    'depends': ['base', 'point_of_sale'],
    'images': ['static/description/cover_image.jpg'],
    # 'qweb': ['static/src/xml/btn_product.xml'],
    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        # 'views/pos_view.xml',
        'views/pos_templates.xml',
    ],
    'qweb': [
        'static/src/xml/Add_product_btn.xml',
        'static/src/xml/Add_product_popup.xml',
        'static/src/xml/ProductListScreen.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
