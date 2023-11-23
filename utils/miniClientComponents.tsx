"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { addProperty } from '@/redux/slices/compareSlice';
import { PropertyData } from '@/dummyData/data';

export const CompareButton =({propertyInfo} : {propertyInfo: PropertyData})=>{
    const dispatch = useAppDispatch();
    const compareState = useAppSelector((state)=> state.compare.value);

    function addToCompareList(){
        if (compareState.length < 4){
            return dispatch(addProperty(propertyInfo));
        }
    }

    return(
        <div onClick={addToCompareList}>
            <FontAwesomeIcon
            icon={faArrowRightArrowLeft}
                style={{ color: "#A09EA0", transition: "color 0.3s", cursor:"pointer", fontSize:"25px"}}
                className="icon"
                onMouseOver={(e) => (e.currentTarget.style.color = "#BF9C45")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#A09EA0")}
            />
        </div>
    )
} 
