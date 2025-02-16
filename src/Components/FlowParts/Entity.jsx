const Entity = ({
    entity,
    searchStatics,
}) => {
    const truckValue = "font-light text-sm p-2"
    const truckLabel = "font-bold text-md bg-gray-100 rounded p-2"
    return entity && <div class="grid grid-cols-2 grid-rows-16 gap-2">
        <span class={truckLabel}>{searchStatics?.chassisNumber}</span>
        <span class={truckValue}>{entity?.chassisNumber}</span>
        <span class={truckLabel}>{searchStatics?.model}</span>
        <span class={truckValue}>{entity?.model}</span>
        <span class={truckLabel}>{searchStatics?.color}</span>
        <span class={truckValue}>{entity?.color}</span>
        <span class={truckLabel}>{searchStatics?.company}</span>
        <span class={truckValue}>{entity?.companyDisplayName}</span>
        <span class={truckLabel}>{searchStatics?.engineNumber}</span>
        <span class={truckValue}>{entity?.engineNumber}</span>
        <span class={truckLabel}>{searchStatics?.mainWarehouseBillNumber}</span>
        <span class={truckValue}>{entity?.mainWarehouseBillNumber}</span>
        <span class={truckLabel}>{searchStatics?.carrierCompany}</span>
        <span class={truckValue}>{entity?.carrierCompany}</span>
        <span class={truckLabel}>{searchStatics?.cottageNumber}</span>
        <span class={truckValue}>{entity?.cottageNumber}</span>
        <span class={truckLabel}>{searchStatics?.name}</span>
        <span class={truckValue}>{entity?.contactsPersonDisplayName}</span>
    </div>
}

export default Entity
