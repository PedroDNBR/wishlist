<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Watson\Validating\ValidatingTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

abstract class BaseModel extends Model
{
    use ValidatingTrait;
    use SoftDeletes;
    use HasFactory;

    /**
     * Formato de data esperado na criacao do model.
     *
     * @var string
     */
    const DATE_FORMAT = 'd/m/Y';

    /**
     * Formato de data com horario para resposta.
     *
     * @var string
     */
    const DATE_TIME_FORMAT = 'd/m/Y H:i';

    /**
     * Formato de data e hora com os segundos.
     *
     * @var string
     */
    const PRECISION_DATE_FORMAT = 'd/m/Y H:i:s';

    /**
     * Formato dateTimeString do Carbon
     *
     * @var string
     */
    const DATE_TIME_STRING = 'Y-m-d H:i:s';


    /**
     * Whether the model should throw a ValidationException if it
     * fails validation. If not set, it will default to false.
     *
     * @var boolean
     */
    protected $throwValidationExceptions = true;
}
