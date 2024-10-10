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
import { CropWhereUniqueInput } from "../../crop/base/CropWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { MarketWhereUniqueInput } from "../../market/base/MarketWhereUniqueInput";

@InputType()
class LiveUpdateUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CropWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CropWhereUniqueInput)
  @IsOptional()
  @Field(() => CropWhereUniqueInput, {
    nullable: true,
  })
  crop?: CropWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MarketWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MarketWhereUniqueInput)
  @IsOptional()
  @Field(() => MarketWhereUniqueInput, {
    nullable: true,
  })
  market?: MarketWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  time?: Date | null;

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
  updateMessage?: string | null;
}

export { LiveUpdateUpdateInput as LiveUpdateUpdateInput };
