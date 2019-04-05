from PCPartPicker_API import pcpartpicker as pcpp

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
    info = pcpp.productLists.getList(el[0], pageNum=1)
    comp = info[0];
    if comp['price']:
        comp['price'] = comp['price'].replace('$', '')
    else: continue
    comp['rating'] = comp['ratings']
    del comp['id']
    del comp['ratings']
    print(el[0])
    print()
    for key in comp:
        print(key)
    print()
