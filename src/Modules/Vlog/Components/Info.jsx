import {
    Calendar,
    Eye,
    LocalizedDate,
} from "Base"

const Info = ({
    currentLocale,
    localesEnum,
    post,
    visitCount,
}) => {

    return <>
        <div class="flex justify-between items-center gap-2 text-xs text-black mt-5">
            <div class="flex items-center gap-1">
                <Eye class="w-4 aspect-square fill-custom-color1" />
                {visitCount}
            </div>
            <div class="flex items-center gap-1">
                <LocalizedDate
                    localeKey={currentLocale?.key}
                    localesEnum={localesEnum}
                    utcDate={post?.utcDate}
                />
                <Calendar class="w-4 aspect-square fill-custom-color1" />
            </div>
        </div>
    </>
}

export default Info
