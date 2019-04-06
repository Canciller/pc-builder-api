from PCPartPicker_API import pcpartpicker as pcpp
import pymongo

client = pymongo.MongoClient('mongodb://localhost:27017')

db = client['pcbuilder']

cpu_info = pcpp.productLists.getList('video-card', pageNum=1)

components = [
    [ 'cpu', 'cpus' ],
    [ 'video-card', 'gpus' ],
    [ 'memory', 'memories' ],
    [ 'case', 'cases' ],
    [ 'power-supply', 'psus' ],
    [ 'cpu-cooler', 'cpucoolers' ],
    [ 'motherboard', 'motherboards' ],
    [ 'internal-hard-drive', 'storages' ]
]

for el in components:
    col = db[el[1]]
    info = pcpp.productLists.getList(el[0], pageNum=1)
    for comp in info:
        for key in list(comp):
            newk = key.replace(' ', '_');
            newk = newk.replace('/', '_');
            newk = newk.replace('-', '_');
            if newk != key:
                comp[newk] = comp[key]
                del comp[key]
        if 'price' in comp:
            comp['price'] = comp['price'].replace('$', '')
        else: continue
        comp['rating'] = comp['ratings']
        del comp['id']
        del comp['ratings']
        if comp['price'] == '': continue
        col.insert_one(comp)