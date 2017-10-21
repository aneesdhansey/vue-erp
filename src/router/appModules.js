import AccountsMain from '../components/accounts/AccountsMain'
import AdminMain from '../components/admin/AdminMain'
import Dashboard from '../components/dashboard/Dashboard'
import HRMain from '../components/hr/HRMain'
import InventoryMain from '../components/inventory/InventoryMain'
import PurchaseMain from '../components/purchase/PurchaseMain'
import SalesMain from '../components/sales/SalesMain'

export default [
    {
        path : '/Dashboard',
        name : 'Dashboard',
        component : Dashboard,
        meta : {
            icon : 'dashboard',
            color : 'green'
        }
      },
      {
        path : '/Inventory',
        name : 'Inventory',
        component : InventoryMain,
        meta : {
            icon : 'store',
            color : 'blue'
        }
      },
      {
        path : '/Purchase',
        name : 'Purchase',
        component : PurchaseMain,
        meta : {
            icon : 'add_shopping_cart',
            color : 'red'
        }
      },
      {
        path : '/Sales',
        name : 'Sales',
        component : SalesMain,
        meta : {
            icon : 'add_shopping_cart',
            color : 'red'
        }
      },
      {
        path : '/Accounts',
        name : 'Accounts',
        component : AccountsMain,
        meta : {
            icon : 'monetization_on',
            color : 'yellow darken-4'
        }
      },
      {
        path : '/HR',
        name : 'HR',
        component : HRMain,
        meta : {
            icon : 'people',
            color : 'blue darken-4'
        }
      },
      {
        path : '/Admin',
        name : 'Admin',
        component : AdminMain,
        meta : {
            icon : 'settings',
            color : 'green darken-4'
        }
      }
]