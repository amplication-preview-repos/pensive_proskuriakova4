/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LiveUpdateCreateNestedManyWithoutCropsInput } from "./LiveUpdateCreateNestedManyWithoutCropsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { PriceHistoryCreateNestedManyWithoutCropsInput } from "./PriceHistoryCreateNestedManyWithoutCropsInput";
import { EnumCropSeason } from "./EnumCropSeason";

@InputType()
class CropCreateInput {
  @ApiProperty({
    required: false,
    type: () => LiveUpdateCreateNestedManyWithoutCropsInput,
  })
  @ValidateNested()
  @Type(() => LiveUpdateCreateNestedManyWithoutCropsInput)
  @IsOptional()
  @Field(() => LiveUpdateCreateNestedManyWithoutCropsInput, {
    nullable: true,
  })
  liveUpdates?: LiveUpdateCreateNestedManyWithoutCropsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PriceHistoryCreateNestedManyWithoutCropsInput,
  })
  @ValidateNested()
  @Type(() => PriceHistoryCreateNestedManyWithoutCropsInput)
  @IsOptional()
  @Field(() => PriceHistoryCreateNestedManyWithoutCropsInput, {
    nullable: true,
  })
  priceHistories?: PriceHistoryCreateNestedManyWithoutCropsInput;

  @ApiProperty({
    required: false,
    enum: EnumCropSeason,
  })
  @IsEnum(EnumCropSeason)
  @IsOptional()
  @Field(() => EnumCropSeason, {
    nullable: true,
  })
  season?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField?: string | null;
}

export { CropCreateInput as CropCreateInput };