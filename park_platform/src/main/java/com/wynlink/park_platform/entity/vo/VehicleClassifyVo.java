package com.wynlink.park_platform.entity.vo;

import com.baomidou.mybatisplus.enums.IdType;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableId;
import java.io.Serializable;

/**
 * <p>
 * 车辆分类表
 * </p>
 *
 * @author Vincent
 * @since 2019-04-16
 */
public class VehicleClassifyVo implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 车场id
     */
    private Integer parkingId;
    
    private String parkingName;
    /**
     * 车辆分类名称
     */
    private String vehicleClassifyName;
    /**
     * 状态  1：正常 0：删除
     */
    private Integer status;
    
    private Date updateTime;
    
    
    


    public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getParkingId() {
        return parkingId;
    }

    public void setParkingId(Integer parkingId) {
        this.parkingId = parkingId;
    }

    public String getVehicleClassifyName() {
        return vehicleClassifyName;
    }

    public void setVehicleClassifyName(String vehicleClassifyName) {
        this.vehicleClassifyName = vehicleClassifyName;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    

    public String getParkingName() {
		return parkingName;
	}

	public void setParkingName(String parkingName) {
		this.parkingName = parkingName;
	}

	@Override
    public String toString() {
        return "VehicleClassify{" +
        ", id=" + id +
        ", parkingId=" + parkingId +
        ", vehicleClassifyName=" + vehicleClassifyName +
        ", status=" + status +
        "}";
    }
}
